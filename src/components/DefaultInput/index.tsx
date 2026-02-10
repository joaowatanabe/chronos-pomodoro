import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {<label htmlFor={id}>{labelText}</label>}
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}
      {/* condicional, se o label text for usado irá renderizar se não
      não irá colocar nada.*/}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
