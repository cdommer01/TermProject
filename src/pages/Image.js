import React, { useEffect, useState } from 'react';


function Images(){
  let client_id = "0GOLsl1vsWIqxwx7J-gWqfdZFnvdg1f8da6DLhI5Rfc";
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${client_id}`
    );
    const data1 = await data.json();
    const result = data1.results;
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
  }, []);
  
  const Submit = () => {
    fetchRequest();
    setImg("");
  };
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center input">
          {res.map((val) => {
            return (
              <>
              <img
                className="col-3 img-fluid img-thumbnail"
                src={val.urls.small}
                alt="val.alt_description"
              />
              </>
            );
          })}
            <input
              className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
              type="text"
              placeholder="Search for something"
              value={img}
              onChange={(e)=> setImg(e.target.value)}
            />
            <button
              type="submit"
              onClick={Submit}
              className="btn bg-dark text-white fs-3 mx-3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;