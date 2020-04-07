function App() {
    const filters = {
        dateFrom: today, // Proviene del archivo data.js
        dateTo: new Date(today.valueOf() + 86400000),
        country: '',
        price: 0,
        rooms: 0
    }

    return (
        <div>
            <Hero filters={filters}/>
        </div>
    )
}

  class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.props = {
            filters: {
                dateFrom: new Date(),
                dateTo: new Date(),
                country: undefined,
                price: undefined,
                rooms: undefined
            }
        }
    }

    render() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let desde = this.props.filters.dateFrom.toLocaleTimeString('es-CO', options);
        let hasta = this.props.filters.dateTo.toLocaleTimeString('es-CO', options);

        return(
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
        Desde el <strong>{ desde }</strong> hasta el <strong>{ hasta }</strong>
                    </h2>
                </div>
            </div>
        </section>
        )
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'))