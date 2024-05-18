import { useForm } from "react-hook-form";

const Form3 = ({ prevForm, setFormData, formData, submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData(data);
    submitForm();
    reset();
  };

  return (
    <form className=" space-y-6 bg-gray-50 mt-4"    onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="age "> Age</label>
        <input 
        className=" mt-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        {...register("age", { required: "Age is required" })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label htmlFor="mobile no">Mobile No.</label>
        <input
        className=" mt-1 ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          {...register("mobileno", { required: "Mobile No. is required" })}
        />
      </div>
      <button type="button" onClick={prevForm}>
        Previous
      </button>
      <button
        className="bg-blue-500 px-6 py-2 rounded-md text-white  "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default Form3;
