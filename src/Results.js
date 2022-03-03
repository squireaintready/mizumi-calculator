// STYLES
import "./Results.css";

const Results = ({ data }) => {
  return (
    <div className="resultsContainer">
      <span></span>
      <h3>Paid</h3>
      <h3>Total</h3>
      <h4 className = "fade-in-text">Servers</h4>
      <p className = "fade-in-text">{data.servers.pay}</p>
      <p className = "fade-in-text">{data.servers.pay * data.servers.count}</p>
      {data.bussers.pay > 0 ? (
        <>
          <h4 className = "fade-in-text">Busboy</h4>
          <p className = "fade-in-text">{data.bussers.pay}</p>
          <p className = "fade-in-text">{data.bussers.pay * data.bussers.count}</p>
        </>
      ) : null}
      {data.paola.pay > 0 ? (
        <>
          <h4 className = "fade-in-text">Paola</h4>
          <p className = "fade-in-text">{data.paola.pay}</p>
          <p className = "fade-in-text">{data.paola.pay}</p>
        </>
      ) : null}
      {data.meat.pay > 0 ? (
        <>
          <h4 className = "fade-in-text">Meat</h4>
          <p className = "fade-in-text">{data.meat.pay}</p>
          <p className = "fade-in-text">{data.meat.pay}</p>
        </>
      ) : null}
      {data.toReturn > 0 ? (
        <>
          <h4 className = "fade-in-text">Return</h4>
          <p className = "fade-in-text"></p>
          <p className = "fade-in-text">{data.toReturn}</p>
        </>
      ) : null}
        <>
          <h4 className = "fade-in-text">Remainder</h4>
          <p className = "fade-in-text"></p>
          <p className='redText'>{data.remainder}</p>
        </>
    </div>
  );
};

export default Results;