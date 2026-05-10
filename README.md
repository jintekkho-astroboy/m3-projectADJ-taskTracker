Title: "Art Academy Task Tracker"


1. Updated CRUD for a Task Tracker
    * Create: Add a new task (e.g., "Prepare canvases for Grade 2").
    * Read: View the list of pending and completed tasks.
    * Update: Mark a task as "Done" or change the priority level.
    * Delete: Remove a task once it's no longer relevant.
2. Updating your 5 Fields (Data Structure)
You can keep the same 5-field logic, but rename the "keys" to fit a To-Do list:
    1. ID: (Keep as Date.now())
    2. Task Name: (Was author) — e.g., "Wash Brushes."
    3. Category: (Was content) — e.g., "Cleanup," "Prep," or "Teaching."
    4. Deadline: (Was timestamp) — e.g., "2026-05-12."
    5. Status: (Was likes) — Instead of a number, this could be "Pending" or "Completed."

3. ESIPO Mapping for the Task Tracker
Component	Description
External Entities (E)	Teachers or School Administrators.
Storage (S)	An array called tasks in your data.js.
Input (I)	HTML Form where a teacher types a new chore/task.
Processing (P)	Logic to filter tasks or toggle them between "Pending" and "Done."
Output (O)	The table view you've already built, showing what needs to be done.

<!-- State/Data Structure -->
ID: Unique Identifier (System use).
Task: The specific action (formerly Author).
Category: The department or area (formerly Content).
Deadline: When it needs to be finished (formerly Timestamp).
Priority: How urgent it is (formerly Likes - using a 1–5 scale).

ID	Task	Category	Deadline	Priority (1-5)
101	Refill Acrylic Paints	Inventory	2026-05-11 09:00 AM	5
102	Wash Ceramic Brushes	Cleanup	2026-05-10 05:00 PM	4
103	Prep Grade 1 Canvases	Classroom Prep	2026-05-12 08:30 AM	3
104	Email Parent Invoices	Admin	2026-05-15 12:00 PM	2
105	Update Gallery Lighting	Maintenance	2026-05-20 03:00 PM	1
106	Sanitize Pottery Wheels	Cleanup	2026-05-10 06:00 PM	5
107	Order Sketchbooks	Procurement	2026-05-14 10:00 AM	4
108	Print Grading Rubrics	Teaching	2026-05-11 08:00 AM	3
109	Organize Drying Rack	Classroom Prep	2026-05-10 04:30 PM	4
110	Mount Student Artwork	Exhibition	2026-05-18 01:00 PM	2
