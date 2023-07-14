
import css from "./Statistics.module.css";
console.log(css)

 const Statistics = props => (
    <section className={css.statistics}>
  {props.title && <h2 className={css.title}>{props.title}</h2>}

     <table>
       <tbody>
         <tr className={css.statList}>
            {props.statistics.map(statistic => (
           <td className={css.item} key={statistic.id}>
             <span className={css.label}>{statistic.label}</span> <br /> 
             <span className={css.percentage}>{statistic.percentage}</span>
           </td>))}
         </tr>
       </tbody>
     </table>

        {/* <ul className="stat-list">
            {props.statistics.map(statistic => (
                <li className="item" key={statistic.id}>
      <span className="label">{statistic.label}</span>
      <span className="percentage">{statistic.percentage}</span>
    </li>))} 
  </ul> */}
</section>
)

export default Statistics;