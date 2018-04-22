import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const CourseFrom = ({course, allAuthors, onSave, onChange, loading, errors }) =>{
  return(
    <form>
      <hi>Mange Course</hi>
      <TextInput
        name="title"
        label = "title"
        value ={course.title}
        onChange = {onChange}
        error = {errors.title}/>

      <SelectInput
      name="autourId"
      label="Autour"
      value = {course.authorId}
      defaultOption = "Select Author"
      onChange = {onChange}
      error = {errors.authorId}
      options = {allAuthors}
      />


      <TextInput
        name="category"
        label = "category"
        value ={course.category}
        onChange = {onChange}
        error = {errors.category}/>


      <TextInput
        name="length"
        label = "length"
        value ={course.length}
        onChange = {onChange}
        error = {errors.length}/>

      <input
        type="submit"
        disabled={loading}
        value={loading?'Saving ...': 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

CourseFrom.propTypes = {
  course : PropTypes.object,
  allAuthors: PropTypes.array,
  onSave : PropTypes.func,
  onChange : PropTypes.func,
  loading : PropTypes.bool,
  errors : PropTypes.object
};

export default CourseFrom;
