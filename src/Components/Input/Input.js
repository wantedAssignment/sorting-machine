import React, { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  // return number[]
  const onSubmit = () => {
    if (value.split(',').length === 1)
      return setErrorMessage('값은 ,(콤마)를 써서 2개 이상 입력하세요');

    const numbers = value.split(',').map((char) => char.trim());
    const isValid = numbers.every(
      (char) => char.length > 0 && regex.test(char)
    );
    if (!isValid)
      return setErrorMessage(
        '입력 값에 숫자가 아닌 값(한글, 영어, 특수문자, 공백)이 있습니다.'
      );

    setErrorMessage(null);
    return numbers.map((num) => parseInt(num));
  };

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={onSubmit}>확인</button>
      <p>{errorMessage}</p>
    </>
  );
};

export default Input;

const regex = /^\d+$/;