"use client"
import { projectData } from '@/utils/data';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import ProjectName from './projectName';

const ProjectDetailsPage = () => {
  const { "project-details": projectDetails } = useParams();
  const project = projectData.find((project) => project.slug === projectDetails);
  const [offsetY, setOffsetY] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      setOffsetY(scrollRef.current.scrollTop);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className='pt-10 w-full overflow-y-auto max-h-screen scroll-smooth hide-scrollbar pb-10'
    >
      {project && <ProjectName project={project} offsetY={offsetY} />}

      <div className='w-[80%] mx-auto font-poppins text-white'>
        <span>
          {/* long lorem ipsum text */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam maxime harum nemo soluta incidunt atque molestiae esse impedit pariatur vel quia unde, ullam enim aut optio. Ea repellat non veritatis eveniet eligendi, inventore saepe aperiam facilis cupiditate molestiae totam atque. Voluptas minus eaque, in ea nesciunt iste voluptatum repudiandae quia itaque vel, temporibus esse accusamus atque, tenetur voluptatem aperiam magnam vitae explicabo? Facere velit ratione architecto veritatis a sapiente amet qui dolore expedita. Accusantium tenetur expedita placeat modi sunt! Repudiandae fugit magnam fugiat nihil eum adipisci laboriosam sequi accusantium harum cum ad, eveniet dolor rem ut vel aliquam ullam nemo suscipit unde similique. At repudiandae perspiciatis impedit vel rem dicta, incidunt eligendi porro, soluta quae quos. Ducimus nulla rerum doloremque fuga! Ipsam mollitia itaque magnam quam dolorum ab, eos dolores. Ducimus tempore vitae harum culpa, esse, possimus suscipit blanditiis nihil ex dolore necessitatibus neque veniam et mollitia excepturi numquam nobis explicabo! Adipisci nihil dolorum odit unde aliquid distinctio doloremque accusamus debitis, soluta necessitatibus. Accusantium sed porro aperiam iure labore, pariatur, amet quia ipsam dolorum mollitia quos deleniti, quidem explicabo suscipit quas tempora. Atque in harum vero, placeat architecto laboriosam doloribus nulla eius dicta ullam at molestias. Temporibus veniam tempore unde accusamus explicabo, sint necessitatibus nemo fugiat, dolores totam cum praesentium eos voluptatum molestias. Fuga harum voluptatibus beatae obcaecati autem, excepturi inventore ducimus ipsam ullam vel magni quia magnam incidunt animi deleniti, porro nobis enim quisquam? Voluptas in ipsum eos odio necessitatibus at suscipit, error dolore aliquid impedit? Cum quasi voluptatum soluta nulla error nisi ipsa minus labore aliquid qui harum fugit facilis, aliquam consectetur provident! Natus ullam sed beatae quidem, dolore voluptas sunt quasi fugit pariatur error eveniet quo dolores aut in doloremque ipsam earum non minus odit, sit cumque iusto nisi optio eos? Hic, aliquid deserunt rerum facere deleniti, quibusdam aperiam distinctio perferendis id quaerat ab odio libero voluptate. Nesciunt atque perferendis assumenda esse repellat commodi ducimus sunt id, sequi inventore? Veniam corrupti voluptatem dolores, repellat magni quis porro culpa in natus minus impedit mollitia qui ducimus molestias error aliquam laboriosam accusamus odio magnam maiores enim. Illo alias id ea dolores a eum temporibus fuga repudiandae odio possimus reprehenderit harum neque, odit repellat quia tempore. Ut non vitae odit, dolorem sint totam ex assumenda. Asperiores blanditiis rerum autem architecto exercitationem aliquam, voluptates iure nulla laudantium vero facere, maiores pariatur ut suscipit minus incidunt? Nam ad sed officiis assumenda pariatur delectus reiciendis amet corporis suscipit, autem quos, expedita, deleniti iure quidem ea rem alias quo dolore animi mollitia sit quae et repellendus. Et repellat harum corporis ad necessitatibus. Aut itaque laborum quis dicta, aliquid enim nihil sed iste eos, pariatur totam rem, numquam nesciunt explicabo recusandae! Suscipit sint magnam pariatur eveniet ratione placeat at assumenda voluptas commodi nulla. Harum corrupti debitis ipsum laboriosam quidem nam aspernatur amet architecto tenetur impedit corporis ab ipsam, reiciendis maiores expedita optio repudiandae minus dolor! Mollitia provident repellat eveniet excepturi quod tempora quos eos, accusamus explicabo dicta harum debitis ut iste eligendi voluptatum, ipsa dolorem nisi et odio a fugit! Quas tempore, iste delectus alias nam doloribus excepturi nobis illo blanditiis eligendi quis id ipsa ratione placeat voluptas dignissimos laudantium adipisci debitis inventore fugiat perspiciatis voluptate distinctio reiciendis. At a cum perspiciatis aperiam illum ullam rerum autem minima tenetur nobis deserunt laudantium facilis, provident vel et magnam magni explicabo veritatis quia. Sed, cum nulla, commodi nostrum numquam voluptate ullam earum possimus dolorem, neque ea? Hic molestiae odio, quis qui tempore pariatur cupiditate error? Reiciendis eos ut dolores assumenda facilis aliquid excepturi, maiores totam provident! Nobis architecto aliquid eligendi dolorem fugit recusandae optio modi, numquam excepturi non sint ratione maxime, quod vero, repellat veritatis! Facere, atque vitae labore doloremque harum, eos numquam mollitia libero ipsa quis iure nihil, magni beatae repudiandae incidunt ducimus! Quis, ipsam. Hic, nesciunt aliquam repellendus corporis quam libero distinctio ab commodi voluptas facilis, officia eius dignissimos cupiditate nam iusto unde laborum a reiciendis! Ullam iusto recusandae necessitatibus ipsam debitis beatae. In at pariatur blanditiis, dolorem natus corrupti repellat dolore autem a, nostrum excepturi omnis architecto molestias culpa repellendus nobis fugiat perferendis perspiciatis unde iste! Vel, deleniti sapiente? Tempora esse reprehenderit mollitia adipisci recusandae et distinctio veritatis, dicta blanditiis atque corrupti, quod sint corporis nobis nam? Asperiores iste non unde nemo quae est illum, cumque, beatae voluptatem rem temporibus esse animi illo dolor labore ab ullam voluptates at. Cupiditate suscipit culpa deleniti asperiores, odio inventore voluptatum fugiat, corrupti a vero incidunt ratione! Fugit vero unde accusamus, dolorem non magnam commodi officia illum repudiandae consequuntur quibusdam quis? Sed autem dolores voluptas veniam vero perspiciatis dolor officiis deleniti, at velit ducimus nesciunt ex aperiam est pariatur. Provident dolor nulla suscipit aut dolorum fuga dicta, vero rerum. Dolor, ullam neque animi, laudantium unde natus eius sit, molestias voluptatum sint nulla iste veniam qui soluta maxime! Possimus magni, dolor cumque excepturi, saepe, corporis harum tempore autem facere minus expedita corrupti ipsam ducimus rem. Sint ullam quae voluptatum ipsa illum saepe possimus dignissimos, exercitationem aspernatur fugiat illo ipsum! Odio ipsa minima vitae, consequuntur voluptate cum sed, alias aliquid reprehenderit aut pariatur. Provident totam adipisci rem, sint alias perferendis ipsum ipsa a earum cum porro repellat explicabo recusandae aut numquam iusto quisquam ut consequuntur nobis temporibus architecto dolor assumenda nam! Quos cum laudantium illo ipsam, quidem fugit esse voluptatibus repudiandae totam ullam laboriosam a. Quas neque consequuntur facere animi accusamus assumenda vel eum maxime soluta sint voluptatum, laboriosam, possimus consectetur repellendus. Repellendus error voluptate numquam maiores tenetur, corrupti nisi et officiis aliquid ab eveniet quasi consequatur, voluptatum delectus quaerat perferendis inventore quia a tempore incidunt beatae praesentium nesciunt repellat! Deserunt facilis hic asperiores exercitationem, totam reiciendis quidem explicabo optio, est earum dignissimos quaerat odit id dolor vel illo cumque aspernatur? Nam illum repellendus molestiae nesciunt commodi? Tenetur provident alias ea dolorum tempora rerum assumenda id sapiente ducimus? Voluptatem sed maxime cum molestiae assumenda eveniet impedit quis animi! Neque placeat nulla dolore et sapiente ut voluptatum eum a. Eos cumque ullam voluptas eaque debitis ea delectus eveniet, officiis impedit deleniti.
        </span>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
