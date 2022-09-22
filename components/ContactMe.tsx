import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto: pandeysubham297@gmail.com?subject=${formData.subject}&body=Hi,my name is ${formData.name}.${formData.message}(${formData.email})`);
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-20">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you nedd.{" "}
          <span className="decoration-[#F7AbbA]/50 underline">Lets Talk.</span>
        </h4>
        <div className="flex  items-center justify-items-center space-x-6 space-y-4">
          <div className="flex items-center space-x-5 justify-center mt-5">
            <PhoneIcon className="text-yellow-500 h-7 w-7 animate-pulse" />
            <p className="text-md">+91 7582011249</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-yellow-500 h-7 w-7 animate-pulse" />
            <p className="text-md">
              <a href="mailto: pandeysubham297@gmail.com">
                pandeysubham297@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-yellow-500 h-7 w-7 animate-pulse" />
            <p className="text-md">New Delhi</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              className="contactInput"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="contactInput"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            className="contactInput"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message")}
          />
          <button className="bg-yellow-500 py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
