import logo from './logo.svg';
import './App.css';
import PriceCard from './card';
function App() {
  let details = [
    {
      mode:"FREE",
      price:"0",
      sub:"Week",
      features : [
        {
          name : "Single User",
          isEnabled : true
        },
        {
          name : "5GB Storage",
          isEnabled : true
        },
        {
          name : "Unlimited Public Projects",
          isEnabled : true
        },
        {
          name : "Community Access",
          isEnabled : false
        },
        {
          name : "Unlimited Private Projects",
          isEnabled : false
        },
        {
          name : "Dedicated Phone Support",
          isEnabled : false
        },
        {
          name : "Free Subdomain",
          isEnabled : false
        },
        {
          name : "Monthly Status Reports",
          isEnabled : false
        }
      ]
    },
    {
      mode:"PLUS",
      price:"150",
      sub:"Month",
      features : [
        {
          name : "5 Users",
          isEnabled : true,
        },
        {
          name : "50GB Storage",
          isEnabled : true
        },
        {
          name : "Unlimited Public Projects",
          isEnabled : true
        },
        {
          name : "Community Access",
          isEnabled : true
        },
        {
          name : "Unlimited Private Projects",
          isEnabled : true
        },
        {
          name : "Dedicated Phone Support",
          isEnabled : true
        },
        {
          name : "Free Subdomain",
          isEnabled : true
        },
        {
          name : "Monthly Status Reports",
          isEnabled : false
        },
      ]
    },
    {
      mode:"PRO",
      price:"600",
      sub:"year",
      features : [
        {
          name : "Unlimited user",
          isEnabled : true
        },
        {
          name : "500GB Storage",
          isEnabled : true
        },
        {
          name : "Unlimited Public Projects",
          isEnabled : true
        },
        {
          name : "Community Access",
          isEnabled : false
        },
        {
          name : "Unlimited Private Projects",
          isEnabled : false
        },
        {
          name : "Dedicated Phone Support",
          isEnabled : false
        },
        {
          name : "Free Subdomain",
          isEnabled : false
        },
        {
          name : "Monthly Status Reports",
          isEnabled : false
        }
      ]
    },
  ]
  return (
    <div className="container" style={{ marginTop: '70px' }}>
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
        {
          details.map((card) => {
            return <PriceCard data={card} ></PriceCard>
        })
        }
        </div>
      </div>
      </div>
      </div>
    
  );
}

export default App;
