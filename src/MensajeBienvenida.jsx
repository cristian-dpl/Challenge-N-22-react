import PropTypes from 'prop-types';

export const MensajeBienvenida = ({mensaje}) => {
  return (
    <p>{mensaje}</p>
  )
}

MensajeBienvenida.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default MensajeBienvenida;