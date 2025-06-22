const Section = ({ title, subtitle, image, reverse }) => (
  <section className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center my-10`}>
    <img src={image} alt={title} className="w-full md:w-auto" />
    <div className="text-center md:text-left p-8 md:w-1/2">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg mt-4">{subtitle}</p>
    </div>
  </section>
);

export default Section;