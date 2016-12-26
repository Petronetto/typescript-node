import { Application } from 'express'
import { findAllCourses } from '../queries/findAllCourses'

export function initRestApi(app: Application) {
  app.route('/api/courses').get((req, res) => {

    findAllCourses().then(results => {
      res.status(200).json(results)
    })
  })
}
