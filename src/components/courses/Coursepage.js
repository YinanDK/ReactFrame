import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
 import * as courseAction from '../../action/courseAction';
import  CourseList from './Courselist';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {

    //initialize state and call our bind functions
    constructor(props, context){
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        // this.state = {
        //     courses:{title: ""}
        // };

        // this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);
    }

//child function that are called by render
    // onTitleChange(event){
    //     const course =  this.state.courses;
    //     course.title = event.target.value;
    //     this.setState({courses:course});
    // }

    // onClickSave(){
    //     this.props.action.createCourse(this.state.courses);
    // }


    // courseRow(course, index){
    //     return(
    //         <div key={index}>{course.title}</div>
    //     );
    // }
  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

    render(){

        const {courses} = this.props;

        return(

            <div>
                <h1>Courses</h1>
                <input
                  type="submit"
                  value = "Add course"
                  className=" btn btn-primary"
                  onClick={this.redirectToAddCoursePage}
                />
                < CourseList courses ={courses} />
                {/* {this.props.courses.map(this.courseRow)} */}
                {/* <h2>Add Courses</h2>
                <input
                    type = "text"
                    onChange = {this.onTitleChange}
                    value ={this.state.courses.title} />

                <input
                    type = "submit"
                    value="Save"
                    onClick = {this.onClickSave} />
                 */}
            </div>
        );
    }
}

//propType validation

CoursePage.propTypes = {

    courses: PropTypes.array,
    action: PropTypes.object
};

//redux connect
function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch){
    return{
        action: bindActionCreators(courseAction, dispatch)
    };
}


export default connect (mapStateToProps, mapDispatchToProps)(CoursePage);
