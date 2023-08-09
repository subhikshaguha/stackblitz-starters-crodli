import React, { useEffect } from 'react';
import FormField from '../UiField/FormField';

const AddReply = ({ form, submitted, isLoading }) => {
  const [arrayField, setArrayField] = React.useState(0);
  const addNewChildField = (e, formPhones) => {
    e.preventDefault();
    let phones = formPhones.addNewChildField();
    setArrayField(phones.length);
  };

  const removeChildField = (e, index, formPhones) => {
    e.preventDefault();
    let phones = formPhones.removeChildField(index);
    setArrayField(phones.length);
  };

  return (
    <div>
      <FormField field={form?.model?.firstName} submitted={submitted} isLoading={isLoading} />
      <FormField field={form?.model?.middleName} submitted={submitted} isLoading={isLoading} />
      <FormField field={form?.model?.lastName} submitted={submitted} isLoading={isLoading} />
      <FormField field={form?.model?.address} submitted={submitted} isLoading={isLoading} />
      <button onClick={(e)=> addNewChildField(e, form.model.phones)}>+</button>
      <br />
      {form.model.phones?.childFields?.map?.((phone, index) => {
        return(
        <React.Fragment>
          <button onClick={(e)=> removeChildField(e, index, form.model.phones)}>-</button>
          <FormField key={`${phone.model.number.key}${index}`} field={phone.model.number} submitted={submitted} isLoading={isLoading} />
          <FormField key={`${phone.model.number.type}${index}`} field={phone.model.type} submitted={submitted} isLoading={isLoading} />
        </React.Fragment>
        )})}
    </div>
  );
};

export default AddReply;
