import { useForm } from "react-hook-form";


const Form2 = ({ nextForm, prevForm, setFormData, formData }) => {
  const {
    register,
    handleSubmit, watch,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });
  const password = watch("password");

  const onSubmit = (data) => {
    setFormData(data);
    nextForm();
  };

  return (
    <form
      className=" space-y-6 bg-gray-50 mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label>Email:</label>
        <input
          className=" mt-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          className=" mt-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          className=" mt-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          type="password"
          {...register("confirmPassword", {
            validate: (value) =>
              value === password  || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button className="bg-gray-500 px-6 py-2 rounded-md text-white mr-4" type="button" onClick={prevForm}>
        Previous
      </button>
      <button
        className="bg-gray-500 px-6 py-2 rounded-md text-white"
        type="submit"
      >
        Next
      </button>
    </form>
  );
};
export default Form2;
