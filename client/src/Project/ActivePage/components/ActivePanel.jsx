import { useState } from "react";
import ActiveCard from "./ActiveCard";
import { BsPlusCircle } from "react-icons/bs";
const ActivePanel = (props) => {
  const [createIssue, setCreateIssue] = useState(false);

  const openCreateIssue = () => {
    setCreateIssue(true);
  };

  const closeCreateIssue = () => {
    setCreateIssue(false);
  };

  const BsPlusCircleComponent = ({ onClick }) => {
    return (
      <BsPlusCircle
        onClick={onClick} // Trigger the onClick function when clicked
        style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable element
      />
    );
  };

  return (
    <div className="">
      <div className="text-white font-normal tracking-wider py-2 px-1 text-start font-sans justify-between ">
        <div className="flex flex-row">
          <div
            className={`align-self-center mr-2 ${
              props.iconColor ? props.iconColor : ""
            }`}
          >
            {props.icon}
          </div>
          <div className="text-lg align-self-center mr-2">
            {props.stageName}
          </div>
          <div className="text-sm text-[#acacac] align-self-center mr-2">
            {props.issues.length}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col overflow-y-auto panel-height shadow-2xl rounded-lg text-white p-1"
        style={{
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
        }}
      >
        {props.issues.length === 0
          ? "No Item Is Present Here"
          : props.issues.map((issue) => (
              <ActiveCard
                key={issue._id}
                issue={issue}
                onMoveIssue={props.onMoveIssue}
              />
            ))}
        {!props.isWorkspace&& <div className="shadow-md p-2 w-full rounded-lg bg-[#273341] hover:bg-[#36414d] cursor-pointer" onClick={openCreateIssue}>
          <div className="ml-[45%]">
            <BsPlusCircleComponent  />
          </div>
        </div>}
      </div>
      
    </div>
  );
};
export default ActivePanel;
