import { CourseModel } from '../models/model'

export function findAllCourses() {
  return CourseModel.findAll({
    order: ['seqNo']
  })
}
