import TestimonialsData from './data'
import './App.scss'
import TestimonialComponent from "./TestimonialComponent";
import ITestimonial from "./ITestimonial";

function App() {
    return (
        <main className={'testimonial-grid'} role='main'>
            {TestimonialsData.map((item: ITestimonial) => {
                return <TestimonialComponent item={item} key={item.name.replace(' ', '-')}/>
            })}
        </main>
    )
}

export default App
