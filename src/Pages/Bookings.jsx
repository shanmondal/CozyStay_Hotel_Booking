import React, { useState } from "react";
import Title from "../Components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const Bookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and
upcoming hotel reservations in one place. Plan your trips seamlessly with
just a few clicks"
        align="left"
      />

      <div className="max-w-6x1 mt-8 w-full text-gray-800">
        <div
          className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b
border-gray-300 font-medium text-base py-3"
        >
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 
            md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
          >
            {/*----------Hotel Details -----------*/}
            <div className=" flex flex-col md:flex-row">
              <img
                src={booking.room.images[0]}
                alt="hotel-img"
                className="min-md:w-44 rounded shadow object-cover "
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className=" font-playfair text-2x1 max-sm:text-3xl">
                  {booking.hotel.name}
                  <span className=" font-inter text-sm">
                    {"  "}( {booking.room.roomType} ){" "}
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img
                    className="max-sm:h-7 max-sm:my-2"
                    src={assets.locationIcon}
                    alt="location-icon"
                  />
                  <span className="max-sm:text-lg">
                    {" "}
                    {booking.hotel.address}{" "}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img
                    className="max-sm:h-7"
                    src={assets.guestsIcon}
                    alt="location-icon"
                  />
                  <span className="max-sm:text-2xl max-sm:my-3 max-sm:ml-2">
                    {" "}
                    {booking.guests}{" "}
                  </span>
                </div>
                <p className="text-base max-sm:text-2xl">
                  Total: ${booking.totalPrice}
                </p>
              </div>
            </div>

            {/*---------Date & Timings----------- */}

            <div className="max-sm:flex max-sm:flex-col flex-row md:items-center max-sm:gap-3 md:gap-20 mt-3 lg:p-4 ">
              <div className="flex max-sm:items-center gap-3 max-sm:flex-row lg:mb-4">
                <p className="text-green-500 max-sm:text-2xl">Check-In </p>
                <p className="text-gray-500 text-sm max-sm:text-xl">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>

              <div className="flex max-sm:items-center gap-3 max-sm:flex-row">
                <p className="text-red-500 max-sm:text-2xl">Check-Out </p>
                <p className="text-gray-500 max-sm:text-xl text-sm">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>
            {/*--------Payment status----------- */}
            <div className="flex flex-col max-sm:gap-3 max-sm:mt-4 max-sm:flex-row max-sm:items-center items-start justify-center pt-3 ">
              <div className="flex items-center gap-2 max-sm:items-center">
                <div
                  className={`h-3 w-3 max-sm:items-center rounded-full ${
                    booking.isPaid ? "bg-green-500 " : "bg-red-500"
                  } `}
                ></div>
                <p
                  className={`text-sm max-sm:text-xl ${
                    booking.isPaid ? "text-green-500" : "text-red-500"
                  } `}
                >
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button
                  className="px-4 max-sm:text-xl py-1.5 mt-4 text-xs border border-gray-400
rounded-full hover:bg-gray-50 hover:border-green-400 transition-all cursor-pointer max-sm:mt-0"
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
