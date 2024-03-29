SELECT cohorts.name, AVG(completed_at-started_at) as average_assistance_request_duration
FROM assistance_requests 
JOIN students ON student_id = students.id
JOIN Cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY average_assistance_request_duration DESC
LIMIT 1
