export default function Home() {
  return (
    <main className="flex justify-between w-full m-auto h-full items-center px-20">
      <div className="space-y-2">
        <h1 className="text-3xl underline">News Oracle</h1>
        <p className="text-black1">
          Understand the Story,{" "}
          <span className="text-purple">Hear the Crowd</span>
        </p>
        <p className="text-black2">
          An AI powered news app, which recommends news and public opnions based
          on your interests and activity.
        </p>

        <button className="px-3 py-1 bg-purple rounded-md text-white border border-black1">
          Coming Soon
        </button>
      </div>
      <div>
        <img
          src="/right.svg"
          className="w-[1500px]"
          alt="mobile screen mockup"
        />
      </div>
    </main>
  );
}
