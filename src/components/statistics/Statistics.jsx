import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, statistics }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <table>
      <tbody>
        <tr className={css.statList}>
          {statistics.map(({ id, label, percentage }) => (
            <td className={css.item} key={id}>
              <span className={css.label}>{label}</span> <br />
              <span className={css.percentage}>{percentage}</span>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </section>
);

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
