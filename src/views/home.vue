<template>
	<div class="common-layout">
		<el-container>

			<div class="clear"></div>
			<div style="margin-left: 5%; margin-right: 5%;">
				<div class="col-md-12">
					<header id="gtco-header" class="gtco-cover gtco-cover-xs gtco-inner" role="banner">

						<div class="gtco-container" style="display: flex;">

							<div class="animate-box" style="margin-top: 3rem;">
								<h2 style='padding-left:50px; font-weight:bold;'>Welcome to XXXX</h2>
								<h3 style='padding-left:50px'>A database of XXXXXXXXXXXXXX</h3>
							</div>
							<div class="header-img animate-box">
								<img src="@/assets/images/logo-v1.png" alt="" width="250" style='margin-top:30px'>
							</div>

						</div>

					</header>
				</div>
			</div>

			<!-- 三个面板 -->
			<div style="margin: 2% 5%; ">
				<!-- 第一个面板 -->
				<div class="col-md-12" data-plugin-portlet id="portlet-1">
					<el-collapse v-model="activeNames">
						<el-collapse-item name="1">
							<!-- 第一个面板title -->
							<template #title>
								<el-icon>
									<View />
								</el-icon>&nbspOverview
							</template>

							<div class="panel-body">
								<!-- 第一个面板 body 文字 -->
								<p style="margin-top: 0px;">
									HiChIP is an effective high-resolution contact map generation method with low read depth
									<a target="_blank" href="https://www.nature.com/articles/nmeth.3999"> (Mumbach et al.,
										Nat.
										Methods, 2016) </a>. Recent years have witnessed a surge in HiChIP assays across
									various
									cell types, which have helped to characterize functional relevance of looping
									interactions
									and provide extraordinary insights into diseases arising from mutations in different
									sources, such as epigenetic modifiers, transcription factors (TFs), TF-binding loci, and
									architectural proteins (<a target='_blank'
										href="https://www.sciencedirect.com/science/article/pii/S009286741731317X">Weintraub
										et
										al., Cell, 2017</a>; <a target='_blank'
										href="https://www.nature.com/articles/nature23875">Simeonov et al., Nature,
										2017</a>).
									To facilitate studies of 3D regulatory interactions and their potential roles in
									transcriptional control during normal development and disease, we curated this
									comprehensive
									HiChIP database, HiChIPdb. We aim to offer a promising avenue for researchers to
									investigate
									genome-wide chromatin interactions across different cell types in the context of various
									proteins of interest.
								</p>
								To date, HiChIPdb contains:
								<ul>
									<ol>
										<li><b>200</b> high-throughput HiChIP experiments with <b>12</b> kinds of ChIPs
											across
											<b>108</b> different cell types.
										</li>
									</ol>
								</ul>
								HiChIPdb has the following main features:
								<ul>
									<ol>
										<li>Hierarchical categorization of whole genome HiChIP interactions across different
											organs, tissues, and cell types.</li>
										<li>Unified pipeline using GRCh37(hg19) as reference genome to obtain comprehensive
											resolution (<a target='_blank'
												href="browse.php?method=fithichip_1k&chip=H3K27ac">1kb</a>, <a
												target='_blank' href="browse.php?method=fithichip_5k&chip=H3K27ac">5kb</a>,
											<a target='_blank' href="browse.php?method=fithichip_10k&chip=H3K27ac">10kb</a>
											,<a target='_blank' href="browse.php?method=fithichip_50k&chip=H3K27ac">50kb</a>
											and <a target='_blank' href="browse.php?method=hichipper&chip=H3K27ac">variable
												length</a><sup><span data-html="true" data-toggle="tooltip"
													data-placement="right"
													title="<div align='left' style='font-size:110%'>The resolutions of 1kb, 5kb, 10kb, and 50kb are obtained by FitHiChIP, and the variable length resolution is obtained by hichipper.</div>"><i
														class="ti-info-alt" style="font-size: 80%"></i></span></sup>) of
											HiChIP
											interactions with regulatory genes, potential GWAS SNP annotations.
										</li>
										<li><a target='_blank' href="detail.php?ID='20056696'&method='fithichip_5k'">
												Extensive
												annotation and IGV visualization</a> of regulatory genes and GWAS catalog
											SNPs
											for each HiChIP interaction.
										</li>

										<li><a target='_blank' href="search.php?demo"> Specific gene/region/SNP
												searching</a>.
										</li>
									</ol>
								</ul>
								<!-- 第一个面板 body 轮播图 -->

								<div style="width: 75vw; margin: 3vh auto;">
									<el-carousel height="50vw">
										<el-carousel-item v-for="item in pics" :key="item.url">
											<img :src="item.url" style="width:100%;height: 100%;" />
										</el-carousel-item>
									</el-carousel>
								</div>

							</div>
						</el-collapse-item>
					</el-collapse>
				</div>
				<!-- 后两个面板 -->
				<!-- papers -->
				<!-- 第二个面板 -->



				<el-collapse class="col-md-6" id="portlet-2" v-model="activeNames">
					<el-collapse-item name="2">

						<template #title>
							<el-icon>
								<Reading />
							</el-icon>&nbsp;Recent articles
						</template>
						<section class="panel-body eq-height">

							

								<blockquote style="font-size: 16px;">
									<a target='_blank' href="https://www.nature.com/articles/s41586-022-04727-9">Gibbin
										mesodermal regulation patterns epithelial development.</a>
									<small>Collier A, Liu A, Torkelson J, et al.<cite>Nature.
										</cite>2022;606(7912):188-96.</small>
								</blockquote>

								<blockquote style="font-size: 16px;">
									<a target='_blank'
										href="https://www.nature.com/articles/s41580-021-00362-w">Understanding 3D
										genome
										organization by multidisciplinary methods.</a>
									<small>Jerkovic I, Cavalli G. <cite>Nature Reviews Molecular Cell Biology.
										</cite>2021;22(8):511-28.</small>
								</blockquote>

								<blockquote style="font-size: 16px;">
									<a target='_blank' href="https://www.nature.com/articles/s41586-021-03903-7">UTX
										condensation underlies its tumour-suppressive activity.</a>
									<small>Shi B, Li W, Song Y, et al. <cite>Nature.
										</cite>2021;597(7878):726-31.</small>
								</blockquote>

								<blockquote style="font-size: 16px;">
									<a target='_blank' href="https://www.nature.com/articles/s43018-020-00145-w">Super
										enhancers define regulatory subtypes and cell identity in neuroblastoma.</a>
									<small>Gartlgruber M, Sharma AK, Quintero A, et al. <cite>Nature Cancer.
										</cite>2021;2(1):114-28.</small>
								</blockquote>


								


							
						</section>
					</el-collapse-item>
				</el-collapse>



				<!-- news -->
				<!-- 第三个面板 -->

				<div class="col-md-6" id="portlet-3">
					<el-collapse v-model="activeNames">
						<el-collapse-item name="3" >

							<template #title>
								<el-icon>
									<ChatLineSquare />
								</el-icon>&nbsp;News and updates
							</template>

							<section class="panel-body eq-height"  >

								<div >

									<ul class="timeline">
										<li>
											<div class="timeline-badge info"><i class="glyphicon glyphicon-check"></i>
											</div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h4 style="font-size: 15px;" class="timeline-title">Add the gene and
														GWAS
														catalog annotation at different scales.</h4>
													<small class="text-light"><el-icon>
															<Clock />
														</el-icon>
														19 June
														2022</small>
												</div>
											</div>
										</li>

										<li class="timeline-inverted">
											<div class="timeline-badge"><i class="glyphicon glyphicon-floppy-disk"></i>
											</div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h4 style="font-size: 15px;" class="timeline-title">Provided a <a
															href="tutorial.php">demo</a> of HiChIP dataset analysis.
													</h4>
													<small class="text-light"><el-icon>
															<Clock />
														</el-icon>
														15 May
														2022</small>
												</div>
											</div>
										</li>

										<li>
											<div class="timeline-badge success"><i class="glyphicon glyphicon-upload"></i>
											</div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h4 style="font-size: 15px;" class="timeline-title">Version 1.0 of
														the
														database is launched.</h4>
													<small class="text-light"><el-icon>
															<Clock />
														</el-icon>
														03 March
														2022</small>
												</div>
											</div>
										</li>

									</ul>

								</div>
							</section>
						</el-collapse-item>
					</el-collapse>

				</div>
			</div>




			
				<!-- footer -->
		<div class="clear"></div> 
		<div style="border-top: 1px solid rgb(89,185,111); margin:0 10px;"></div>
		<el-footer>
			<div style="margin-left: 5%; margin-right: 5%;">
			<div class="col-md-12" data-plugin-portlet id="index-footer" style="margin-top: 20px;">
				<div class="panel panel-default">
					<div class="panel-footer" style="font-size: 14px;">
						<span class="glyphicon glyphicon-subtitles"></span>
						<!-- 文字链接需要改 -->
						<span>This work is licensed under a <a href="#">Creative Commons Attribution 4.0 International License</a>.</span>
					</div>
				</div>
			</div>
		</div>
			</el-footer>
		</el-container>
	</div>
</template>


<script>
// @ is an alias to /src


export default {
	name: 'home',
	components: {

	},
	data() {
		return {
			activeNames: ['1', '2', '3'],
			pics: [
				{ url: require("../assets/images/new/browse1.png") },
				{ url: require("../assets/images/new/browse2.png") },
				{ url: require("../assets/images/new/browse3.png") },
				{ url: require("../assets/images/new/tutorial.png") },
			]

		};

	},
	methods: {

	}

}
</script>
<style scoped>
.el-footer {
    --el-footer-padding: 0 ;
	}
</style>