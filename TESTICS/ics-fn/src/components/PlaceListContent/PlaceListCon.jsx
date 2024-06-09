import React, { useState } from "react";
import "./PlaceListCon.css";
import PlaceList from "../../data/example_data.json";
import { FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const PlaceListCon = () => {
  const search_categories = [
    {
      id: 1,
      title: "restaurant",
    },
    {
      id: 2,
      title: "cafe",
    },
    {
      id: 3,
      title: "bakery",
    },
  ];

  const getCurrentDay = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDayIndex = new Date().getDay();
    return daysOfWeek[currentDayIndex];
  };

  // get current day for display operation time of place
  const currentDay = getCurrentDay();

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const currentDayOperation = PlaceList[0].operation_time.find(
    (day) => day.day === currentDay
  );

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < PlaceList.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return PlaceList.slice(startIndex, endIndex);
  };

  return (
    <>
      <div className="container">
        {/* Search place list */}
        <div className="searchbar-container">
          <div className="title-content">Place List</div>
          <div className="searchbar-input">
            <div className="input">
              <select name="categories" id="categories">
                {search_categories.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="centerline">
              <span></span>
            </div>
            <div className="input">
              <input type="text" placeholder="Search name.." />
              <span>
                <FaSearch />
              </span>
            </div>
          </div>
        </div>

        {/* Place List Item */}
        <div className="placelist-container">
          <div className="placelist-content">
            {getCurrentPageItems().map((item, idx) => (
              <div key={idx} className="placelist-boxes">
                <div className="placelist-info">
                  <div className="profile-image">
                    <img
                      width={36}
                      src={item.profile_image_url}
                      alt="PlaceImages"
                    />
                  </div>
                  <div className="placelist-detail">
                    <div className="title">
                      <p>{item.name}</p>
                    </div>
                    <div className="info">
                      <div className="operation">
                        <FaRegCalendarAlt />
                        {/* check currently day operation closed ? */}
                        {currentDayOperation.time_open !== "closed" ? (
                          <p>{currentDayOperation.time_open} AM</p>
                        ) : (
                          <p>Closed</p>
                        )}

                        {currentDayOperation.time_open !== "closed" &&
                        currentDayOperation.time_close !== "closed" ? (
                          <p> - </p>
                        ) : (
                          ""
                        )}

                        {currentDayOperation.time_close !== "closed" ? (
                          <p>{currentDayOperation.time_close} PM</p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="rating">
                        <p>
                          <GoDotFill size={20} />
                        </p>
                        <p>{item.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="placelist-image-preview">
                  <div className="image-preview">
                    <img width={50} src={item.images[0]} alt="images-preview" />
                    <img width={50} src={item.images[1]} alt="images-preview" />
                    <img width={50} src={item.images[2]} alt="images-preview" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Buttons */}
        <div className="placelist-button">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <IoIosArrowBack />
          </button>
          <div className="current-pages">{currentPage}</div>
          <button
            onClick={handleNextPage}
            disabled={currentPage * itemsPerPage >= PlaceList.length}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaceListCon;
