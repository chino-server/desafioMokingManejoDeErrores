import errorDictionary from "../dictionary/errorDictionary.js";

export const handleError = (err, req, res, next) => {
  

  const error = errorDictionary[err.message];

  if (error) {
    res.status(error.httpStatus).json({ message: error.message, status:error.httpStatus });
  } else {
    console.log(error);
    res.status(500).json({ message: "Ocurrrio un problema" });
  }
};
