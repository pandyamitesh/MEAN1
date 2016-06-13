var _ = require('lodash');
var Student = require('./student_model.js');
/**
 * @swagger
 * resourcePath: /apiJs11
 * description: All about API
 */

/**
 * @swagger
 * models:
 *   User:
 *     id: User
 *     properties:
 *       username:
 *         type: String
 */

module.exports = function(app) {

    /* Create */
    app.post('/student', function (req, res) {
        var newStudent = new Student(req.body);
        newStudent.save(function(err) {
            if (err) {
                res.json({info: 'error during Student create', error: err});
            };
            res.json({info: 'Student created successfully'});
        });
    });

    /* Read */
    /**
     * @swagger
     * path: /students
     * operations:
     *   -  httpMethod: GET
     *      summary: Get Students
     *      notes: Returns Students
     */
    app.get('/students', function (req, res) {
    	Student.find(function(err, students) {
            if (err) {
                res.json({info: 'error during find students', error: err});
            };
            res.json({info: 'students found successfully', data: students});
        });
    });

    app.get('/student/:id', function (req, res) {
    	Student.findById(req.params.id, function(err, student) {
            if (err) {
                res.json({info: 'error during find student', error: err});
            };
           
                res.json({info: 'student found successfully', data: student});
             
        });
    });

    /* Update */
    app.put('/student/:id', function (req, res) {
    	Student.findById(req.params.id, function(err, student) {
            if (err) {
                res.json({info: 'error during find student', error: err});
            };
            if (student) {
                _.merge(student, req.body);
                student.save(function(err) {
                    if (err) {
                        res.json({info: 'error during student update', error: err});
                    };
                    res.json({info: 'student updated successfully'});
                });
            } else {
                res.json({info: 'student not found'});
            }

        });
    });

    /* Delete */
    app.delete('/student/:id', function (req, res) {
    	Student.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info: 'error during remove Student', error: err});
            };
            res.json({info: 'Student removed successfully'});
        });
    });


};




/*
 * module.exports = function(app) { students = [];
 *  // Create app.post('/student', function(req, res) { console.log('Create
 * Students'); students.push(req.body); res.json({ info : 'Student Created
 * Sucessgully' }); });
 *  // Read All Students app.get('/students', function(req, res) {
 * console.log('Read All Students'); res.send(students); });
 *  // Read Specefic Student app.get('/student/:id', function(req, res) {
 * res.send ( _.find ( students, { id : req.params.id
 *  }
 *  )
 *  );
 * 
 * });
 * 
 * 
 * //Update
 * 
 * app.put('/student/:id', function(req, res) {
 * 
 * var index = _.findIndex ( students, { id : req.params.id
 *  }
 *  ); _.merge(students[index],req.body); res.json({info:'Student updated
 * sucessfully'});
 * 
 * 
 * });
 * 
 * 
 * //Delete
 * 
 * app.delete('/student/:id', function(req, res) {
 * 
 * _.remove(students,function(student){ return student.id === req.params.id; });
 * res.json({info:'Student removed sucessfully'});
 * 
 * 
 * });
 *  };
 */