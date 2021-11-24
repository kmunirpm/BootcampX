SELECT cohorts.name, SUM(started_at-created_at) as average_wait_time
FROM assistance_requests
JOIN students ON student_id = students.id
JOIN Cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY average_wait_time;
