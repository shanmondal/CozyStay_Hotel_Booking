import React, { use } from "react";
import Title from "../../Components/Title";
import { assets } from "../../assets/assets";

import { dashboardDummyData } from "../../assets/assets";
import { useState } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your
room listings, track bookings and analyze revenue-all in one place. Stay
updated with real-time insights to ensure smooth operations. "
      />
      <div className="flex max-sm:flex-col gap-4 my-8">
        {/*--- Total Bookings -- */}
        <div className="bg-primary/3 border border-primary/10 rounded flex items-center p-4  max-sm:gap-6  pr-8">
          <img src={assets.totalBookingIcon} alt="" className="  h-10" />
          <div />
          <div className="flex gap-4   items-center sm:ml-4 font-medium max-sm:gap-14 ">
            <p className=" text-blue-500 text-lg max-sm:text-xl">
              Total Bookings
            </p>
            <p className="text-neutral-600 text-base mt-1">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>
        {/*- - ---- Total Revenue -- */}
        <div className="bg-primary/3 border border-primary/10 rounded flex items-center p-4 max-sm:gap-6 pr-8">
          <img src={assets.totalRevenueIcon} alt="" className="  h-10" />
          <div />
          <div className="flex gap-4  items-center sm:ml-4 font-medium max-sm:gap-6 ">
            <p className=" text-blue-500 text-lg max-sm:text-xl">
              Total Revenue
            </p>
            <p className="text-green-600 flex gap-2 text-base mt-1">
              <span className="text-amber-400">$</span>{" "}
              {dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/*---Recent Bookings  -- */}
      <h2 className="text-x1 text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>
      <div className="w-full max-w-3x1 text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full">
          <thead className=" bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
              <th
                className="py-3 px-4 text-gray-800 font-medium
max-sm:hidden"
              >
                Room Name
              </th>
              <th
                className="py-3 px-4 text-gray-800 font-medium
text-center"
              >
                Total Amount
              </th>
              <th
                className="py-3 px-4 text-gray-800 font-medium
text-center"
              >
                Payment Status
              </th>
            </tr>
          </thead>

          <tbody className=" text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.user.username}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                  {item.room.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                  $ {item.totalPrice}
                </td>
                <td className=" py-3 px-4 border-t border-gray-300 flex">
                  <button
                    className={`py-1 w-16 px-3 text-xs rounded-full mx-auto ${
                      item.isPaid
                        ? "bg-green-200 text-green-600"
                        : "bg-amber-200 text-yellow-600"
                    }`}
                  >
                    {item.isPaid ? "Paid" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;
