SELECT day, count(assignment_id) number_of_assignments, sum(duration) as duration
FROM assignments
JOIN assistance_requests ON assignments.id = assignment_id
GROUP BY day
ORDER BY day
