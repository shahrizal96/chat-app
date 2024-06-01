const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=username"
            alt="Bubble"
          />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>Hi whatsapp</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1`}>12:12</div>
    </div>
  );
};
export default Message;
