import { almatyDistricts } from "@/app/kazakhstan-districts";
import React from "react";
import Select from "react-select";

export type DistrictSelectValue = {
  label: string;
  value: string;
  emoji: string;
};

interface DistrictSelectProps {
  value?: DistrictSelectValue;
  onChange: (value: DistrictSelectValue | null) => void; // Allow null as a possible value
}

const DistrictSelect: React.FC<DistrictSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <Select
        placeholder="Select a district"
        isClearable
        options={almatyDistricts}
        value={value}
        onChange={(value) => onChange(value)} // Pass the value as it is, can be DistrictSelectValue or null
        formatOptionLabel={(option: any) => (
          <div
            className="
                flex
                flex-row
                items-center
                gap-3
            "
          >
            <div>{option.emoji}</div>
            <div>{option.label}</div>
          </div>
        )}
        // Customize classNames and theme as needed
      />
    </div>
  );
};

export default DistrictSelect;
