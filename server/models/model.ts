import * as ORM from 'sequelize'
import { Sequelize, LoggingOptions } from 'sequelize'
import { initCourseModel } from './initCourseModel'

const dbURL = 'postgres://homestead:secret@localhost:5432/homestead'

const options: LoggingOptions = {benchmark: true, logging: console.log}

const sequelize: Sequelize = new ORM(dbURL, options)

export const CourseModel = initCourseModel(sequelize)
