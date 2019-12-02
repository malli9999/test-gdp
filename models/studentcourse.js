const mongoose = require('mongoose')

const StudentCourseSchema = new mongoose.Schema({

  //_id: { type: Number, required: true },
  courseId: { type: String, required: true },
  studentEmail: {
    type: String,
    required: true
    
    
  },

  iscodeRevealed: {
    type: Boolean
  },
  
  codeword: {
    type: String,
    required: false
    
  },

  name: {
    type: String,
    required: true
  },

  isRead: {
    type: Boolean,
    required: false,
    default:false
    
  },
  
})
module.exports = mongoose.model('StudentCourse', StudentCourseSchema)
