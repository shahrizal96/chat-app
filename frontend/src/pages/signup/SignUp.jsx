import GenderCheckBox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up<span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Cena"
              className="w-full h-10 input input-bordered"
            />
          </div>

          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johncena"
              className="w-full h-10 input input-bordered"
            />
          </div>

          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 input input-bordered"
            />
          </div>

          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-10 input input-bordered"
            />
          </div>

          <GenderCheckBox />

          <a
            href="#"
            className="inline-block text-sm hover:underline hover:text-blue-600"
          >
            Already have an account?
          </a>

          <div>
            <button className="mt-2 btn btn-block btn-sm">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;