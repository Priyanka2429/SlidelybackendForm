import { Router, Request, Response } from 'express';

// Create a router instance
const router = Router();
// GET /api/submissions
router.get('/', (req: Request, res: Response) => {
    // Logic to fetch submissions from database or other source
    // Example:
    const submissions = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890', githubLink: 'https://github.com/johndoe', stopwatchTime: '00:05:30' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '0987654321', githubLink: 'https://github.com/janesmith', stopwatchTime: '00:03:45' }
    ];
    
    res.json(submissions);
});

// POST /api/submissions
router.post('/', (req: Request, res: Response) => {
    // Logic to handle new submission creation
    const { name, email, phone, githubLink, stopwatchTime } = req.body;

    // Example: Save submission to database or other processing
    const newSubmission = { id: 3, name, email, phone, githubLink, stopwatchTime };
    
    res.status(201).json(newSubmission);
});
export default router;

