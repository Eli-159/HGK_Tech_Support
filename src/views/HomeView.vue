<template>
  <!-- <div class="carousel">
    <img class="banner" src="@/assets/Christmas_Banner_1.jpg">
    <img class="banner" src="@/assets/Christmas_Banner_2.jpg">
    <img class="banner" src="@/assets/Christmas_Banner_3.jpg">
  </div> -->

  <main>

    <h2>Friendly, Local Service</h2>
    <p>
      Based in Middle Park, I service the 4074 area, providing you with a convenient, local option for technical support. I even come to you!
      No question or task is too simple and I'm very happy to either fix the problem or teach you to do it yourself.
    </p>

    <h2>Reliable, Accurate Solutions</h2>
    <p>
      I'm a high school student with an advanced general understanding of technology. I'm capable of learning new technology quickly, and can find workable 
      to suit your needs.
    </p>

    <h2>Affordable, Grandkid Rates</h2>
    <p>
      Proffesional callout fees can be expensive. Smaller problems often don't seem to be worth it. That's where I come in.
      For a fraction of the rate and no callout fee, I'm able to help you with everyday issues.
    </p>

    <h2>Services</h2>
    <ul>
      <li>Mac Support / Education</li>
      <li>Windows Support / Education</li>
      <li>iPad/iPhone Support / Education</li>
      <li>Software Support / Education</li>
      <li>Computer Setup</li>
      <li>Phone Setup</li>
      <li>Sound System Setup</li>
      <li>Smart Home Setup</li>
      <li>Web Development</li>
    </ul>
    <p>
      Don't see what you're looking for? Just let me know! It may have just not made it on the list. 
      Otherwise, I can offer a discounted rate for unfamiliar work as it may take a little longer.
    </p>

    <h2>Hourly Rate: $30</h2>

  </main>
  
</template>

<script>
  // import Flickity from 'flickity';
  // export default {
  //   name: 'HomeView',
  //   mounted() {
  //     new Flickity('.carousel', {
  //       contain: true,
  //       autoPlay: true,
  //       imagesLoaded: true,
  //       percentPosition: false,
  //       wrapAround: true
  //     });
  //   }
  // }
</script>

<style>

  h2 {
    margin-bottom: 5px;
  }

  h2+p, h2+ul {
    margin-top: 0;
  }

  .carousel {
    width: 100%;
  }

  .banner {
    width: 100%;
    max-width: 1400px;
  }

  .flickity-button {
    display: none;
}

</style>