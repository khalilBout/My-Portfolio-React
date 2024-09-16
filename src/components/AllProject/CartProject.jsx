import { FaStar } from "react-icons/fa6";

const CartProject = ({ dishes }) => {
  return (
    <div className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
      <img src={dishes.image} alt="..." />
      <div className="flex flex-col gap-1 mt-2">
        <h5 className="font-bold font-Poppins">{dishes.title}</h5>
        <button className="font-bold text-gray self-end">READ MORE</button>
      </div>
    </div>
  );
};

export default CartProject;
