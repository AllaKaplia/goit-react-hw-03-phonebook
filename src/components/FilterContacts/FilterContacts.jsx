import React from "react";
import { nanoid } from 'nanoid';
import { LabelFilter, InputFilter } from "./FilterContacts.styled";

const FilterContacts = ({ value, onChange }) => {
  return (
    <LabelFilter>
      Filter
      <InputFilter
        type="text"
        value={value}
        id={nanoid()}
        name="filter"
        onChange={onChange} 
      />
    </LabelFilter>
  );
}

export default FilterContacts;