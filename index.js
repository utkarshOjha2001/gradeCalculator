export default function getResult(maxMarks, obtainMarks, callback) {
    try {
      if(maxMarks < obtainMarks){
          throw new Error("Maximum marks cannot be less than obtained marks.")
      }
      if (typeof maxMarks !== "number" || typeof obtainMarks !== "number") {
        throw new Error(
          "Invalid input! Both maxMarks and obtainMarks must be numbers."
        );
      }
  
      if (obtainMarks > maxMarks*0.9) {
          console.log("A");
      } else if (obtainMarks > maxMarks*0.8) {
          console.log("B");
      } else if (obtainMarks > maxMarks*0.7) {
          console.log("C");
      } else if (obtainMarks > maxMarks*0.6) {
          console.log("D");
      } else if (obtainMarks >= maxMarks*0.5) {
          console.log("E");
      } else {
          console.log("F");
      }
  
      const result = isPass(maxMarks, obtainMarks);
  
      if (callback && typeof callback === "function") {
        callback(null, result);
      }
    } catch (error) {
      callback(`Error: ${error.message}`, null);
    }
  }
  
  function isPass(maxMarks, obtainMarks) {
      const percentage = (obtainMarks / maxMarks) * 100; 
      return percentage >= 50 ? "pass" : "fail";
    }
  getResult(100, 91, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  