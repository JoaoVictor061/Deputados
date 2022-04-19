import React, { PureComponent } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Menu from './Menu';
import apiDeputados from './service/apiDeputados';
  
const Discurso = () => {

  return (
    <div>
        <Menu />
  <h1> Discurso</h1>

</div>
)
}

/*const DeputadosDiscursos = () => {

    const params = useParams()

    const [deputadosDis, setDeputadosDis] = useState([])
    
    useEffect(() => {
        apiDeputados.get('deputados/'+ params.id + '/discursos' ).then(resultado => {
            setDeputadosDis(resultado)
        })
    }, [])
*/
const data = [
  {
    name: 'Ano 2012',
    pv: 2400,

  },
  {
    name: 'Ano 2013',
    pv: 1398,

  },
  {
    name: 'Ano 2014',
    pv: 9800,

  },
  {
    name: 'Ano 2015',
    pv: 3908,

  },
  {
    name: 'Ano 2016',
    pv: 4800,

  },
  {
    name: 'Ano 2017',
    pv: 3800,

  },
  {
    name: 'Ano 2018',
    pv: 4300,

  },
];

    export default function App() {
    return (
      <ResponsiveContainer width="50%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{stroke:"red"}}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#000055" />
        </BarChart>
      </ResponsiveContainer>
    );
}

// export default Discurso