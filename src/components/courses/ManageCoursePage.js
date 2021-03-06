import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../action/courseAction';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
          course : Object.assign({}, this.props.course),
          errors: {},
          saving:false
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

  componentWillReceiveProps(nextProps){
      if(this.props.course.id != nextProps.course.id){
        this.setState({course: Object.assign({}, nextProps.course)});

      }
  }


  updateCourseState(event){
    const field =  event.target.name;
    let course  = this.state.course;
    course[field]= event.target.value;
    return this.setState({courses:course});
  }

  saveCourse(event){
      event.preventDefault();
      this.setState({saving:true});
      this.props.action.saveCourse(this.state.course)
        .then(()=>this.redirect())
        .catch(error=>{
          toastr.error(error);
          this.setState({saving: false});
        });

  }

  redirect (){
    this.context.router.push('/courses');
    toastr.success('Course Saved');
    this.setState({saving:false});
  }

    render() {
        return (


            <CourseForm
              allAuthors = {this.props.authors}
              onChange={this.updateCourseState}
              onSave={this.saveCourse}
              course = {this.state.course}
              errors = {this.state.errors}
              loading = {this.state.saving}
            />


        );
    }
}

ManageCoursePage.propTypes = {
  course : PropTypes.object.isRequired,
  authors : PropTypes.array,
  action: PropTypes.object
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id){
  const course = courses.filter(course => course.id == id);
  if(course)return course[0];
  return null;
}


function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;


  let course ={
    id: "",
    watchHref: "",
    title : "",
    authorId : "",
    length: "",
    category: ""
  };

  if(courseId) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map((author)=>{
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });

    return {
      course: course,
      authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(courseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
