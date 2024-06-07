import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// Will call controller function
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentID', StudentControllers.getSingleStudent);
router.delete('/:studentID', StudentControllers.deleteStudent);

export const StudentRoutes = router;