const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 py-2 rounded cursor-pointer hover:bg-sky-500">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=username"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">John</p>
            <span className="text-xl">X</span>
          </div>
        </div>
      </div>

      <div className="my-0 divider oy-0 h1" />
    </>
  );
};
export default Conversation;
