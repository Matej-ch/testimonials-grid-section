import TestimonialsData from './data'
import './App.scss'
import TestimonialComponent from "./TestimonialComponent";
import ITestimonial from "./ITestimonial";

function App() {
    return (
        <main className={'testimonial-grid'} role='main'>
            {TestimonialsData.map((item: ITestimonial, index: number) => {
                let isWide = (index === 0 || index === 3);

                return <TestimonialComponent item={item} isWide={isWide} key={item.name.replace(' ', '-')}/>
            })}
        </main>
    )
}

export default App
