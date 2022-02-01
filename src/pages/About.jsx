function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Jexi Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Developed by{" "}
        <span className="text-white">
          <strong>
            <a href="linkedin.com/in/iamvictorsam">IamVictorSam</a>
          </strong>
        </span>
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">2.0.0</span>
      </p>
    </>
  );
}

export default About;
