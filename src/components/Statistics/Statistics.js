import {
  StatisticsBox,
  StatisticsBoxTitle,
  StatisticsBoxList,
  StatisticsBoxItem,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <StatisticsBox>
      {title && <StatisticsBoxTitle>{title}</StatisticsBoxTitle>}
      <StatisticsBoxList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsBoxItem
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span class="label">{label}</span>
              <span class="percentage">{percentage}%</span>
            </StatisticsBoxItem>
          );
        })}
      </StatisticsBoxList>
    </StatisticsBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
