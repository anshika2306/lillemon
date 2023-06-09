
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
            <TestimonialCard name="Aman Mishra" description="Best Food and Ambience!"/>
            <TestimonialCard name="Sarah Thompson" description="Meditarrian food at its finest! Every bite is a burst of fresh ingredients and vibrant tastes."/>
            <TestimonialCard name="Bruce Wayne" description="I never knew healthy food could taste this incredible! The Meditarrian cuisine has won me over."/>
            <TestimonialCard name="Peter Parker" description="Exquisite Mediterranean dishes that satisfy both my taste buds and my craving for wholesome meals."/>
            <TestimonialCard name="Natasha Romanoff" description="From the first bite, I fell in love with the rich flavors and aromatic herbs of Meditarrian cuisine."/>
            <TestimonialCard name="Tony Stark" description="Meditarrian food is a true culinary delight, combining simplicity and sophistication in each dish."/>
            <TestimonialCard name="Diana Prince" description="The food here was amazing!! Everyone should try this place
                 out at least once if they live in Chicago."/>
            <TestimonialCard name="Clark Kent" description="Just Perfect!"/>
            </section>

            
        </section>
    );
}