
export default function Cards({id, name, email, username}) {
  return (
    <div className="w-[250px] sm:w-[300px] h-[400px] sm:h-[450px] bg-[#ff725c] flex flex-col gap-2 items-center rounded-2xl shadow-[0px_0px_10px_5px_rgba(0,0,0,0.2)] hover:scale-[1.05] duration-300 ">
      <img className="w-[300px]" src={`https://robohash.org/${id}`} alt="" />
      <span className="text-xl sm:text-2xl font-bold">{name}</span>
      <span>{email}</span>
      <span>{username}</span>
    </div>
  );
}
