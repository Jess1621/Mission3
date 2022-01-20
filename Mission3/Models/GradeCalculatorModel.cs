using System;
using System.Collections.Generic;
//To be able to use data validation
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class GradeCalculatorModel
    {
        //Makes the field required to fill out and makes it so the input has to be a value between 0 and 100
        [Required, Range(0,100)]
        public int Assignments { get; set; }

        [Required, Range(0,100)]
        public int Project { get; set; }

        [Required, Range(0, 100)]
        public int Quizzes { get; set; }

        [Required, Range(0, 100)]
        public int Exams { get; set; }

        [Required, Range(0, 100)]
        public int Intex { get; set; }
    }
}
