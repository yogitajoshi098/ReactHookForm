import { useForm } from "react-hook-form";

const Form1 = ({ nextForm, setFormData, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    setFormData(data);
    nextForm();
  };

  return (
    <form className=" space-y-6 bg-gray-50 mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor=" firstname"> First Name:</label>
        <input
          className=" mt-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="lastname">Last Name:</label>
        <input
          className=" mt-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          {...register("lastName", { required: "Last name is required" })}
        />
      </div>
      <button
        className="bg-gray-500 px-6 py-2  rounded-md text-white  "
        type="submit"
      >
        Next
      </button>
    </form>
  );
};
export default Form1;
