SELECT AVG(average_total_duration) as average_total_duration
FROM	(SELECT SUM(completed_at-started_at) as average_total_duration
	FROM assistance_requests
	JOIN students ON student_id = students.id
	JOIN Cohorts ON cohort_id = cohorts.id
	GROUP BY cohorts.name) as Sums_Cohort
