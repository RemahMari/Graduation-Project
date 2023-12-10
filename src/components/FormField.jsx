import React from 'react';

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange, options }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : inputType === 'select' ? (
<select
  value={value}
  onChange={handleChange}
  className="py-3 px-4 outline-none border-2 border-[#3a3a43] rounded-lg w-full bg-transparent text-[#3a3a43] font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
  {options.map((option) => (
    <option
      key={option.value}
      value={option.value}
      className=" py-2 px-4 text-gray-900"
    >
      {option.label}
    </option>
  ))}
</select>


      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  )
}

export default FormField;
