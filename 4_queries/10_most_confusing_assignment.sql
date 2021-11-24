SELECT assignments.id, name, day, chapter, count(assignment_id) total_requests
FROM assignments
JOIN assistance_requests ON assignments.id = assignment_id
GROUP BY assignments.id, name, day, chapter
ORDER BY total_requests DESC
